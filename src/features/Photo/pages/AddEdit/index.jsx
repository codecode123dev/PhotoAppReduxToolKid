import React from 'react';
import './styles.scss'
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
// import {  useNavigate } from 'react-router-dom';
import { useHistory} from 'react-router-dom';

import { useParams } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {

  const dispatch = useDispatch()
  const history = useHistory()
  const {photoId} = useParams()
  const isAddMode = !photoId;


  const editedPhoto = useSelector(state => {
    const foundPhoto = state.photos.find(x => x.id === photoId);
    return foundPhoto;
    // console.log({list});
  });
  // console.log({ photoId, editedPhoto })

  const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: '',
    }
    : editedPhoto;

  const handleSubmit = (value) =>{
    return new Promise(resolve => {
      // console.log('Form Submit:', value)
        if(isAddMode){
          const action = addPhoto(value)
        // console.log({action})
          dispatch(action)
        }
        else{
          const action = updatePhoto({ ...value, id: photoId})
          dispatch(action)
        }
        history.push('/photos')
        resolve(true)
    })
  }
  
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo " />
      <div className="photo-edit__form">
        <PhotoForm 
        isAddMode={isAddMode}
        initialValues ={initialValues}
        onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage