import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import './main.scss'
import Images from 'components/constants/images';
import Banner from 'components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { useHistory } from 'react-router-dom';
import { removePhoto } from 'features/Photo/photoSlice';
MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);
  // const history = useHistory();
  const history = useHistory();

  // console.log('List of photos: ', photos);

  const handlePhotoEditClick = (photo) => {
    // console.log('Edit: ', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }
  console.log({photos});

  return (
    <div className="photo-main">
      <Banner title="your awesome photo" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className='py-5'>
          <Link className='button-add-new' to="/photos/add">Add New Photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage