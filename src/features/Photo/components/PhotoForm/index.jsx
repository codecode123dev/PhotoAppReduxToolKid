import PHOTO_CATEGORY_OPTIONS from 'components/constants/global';
import Images from 'components/constants/images';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
// import PHOTO_CATEGORY_OPTIONS from '../../../../components/constants/global';
// import Images from '../../../../components/constants/images';
import * as Yup from 'yup'
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const {initialValues, isAddMode} = props
  console.log(initialValues)
  // const {id, ...newInitialValues} = initialValues

  // console.log(newInitialValues)

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),

    categoryId: Yup.number().required('This field is required'),

    photo: Yup.string().required('This field is required')
  })
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={props.onSubmit}
    >
      {formikProps =>{
        const {values, errors, touched, isSubmitting } = formikProps
        // console.log({values, errors, touched})  

        return(
          <Form>

            <FastField
              name='title'
              component={InputField}

              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name='categoryId'
              component={SelectField}

              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />


            <FastField
              name='photo'
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color={isAddMode ? 'primary' : 'success'} type='submit'>
                {isSubmitting &&  <Spinner size='sm' />}
                {isAddMode ? 'Add to album' : 'Update to album'}
              </Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  );
}

export default PhotoForm;