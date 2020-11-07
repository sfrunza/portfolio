import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, getIn } from 'formik';
import {
  Box,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  editor: {
    '& .ql-editor': {
      height: 200
    }
  },
  flexConatiner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },

  },
  flexItem: {
    flex: '0 0 47%',
  },
  flexItemSecond: {
    flex: '0 0 47%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '32px'
    },
  }
}));

function CustomerForm({
  className,
  ...rest
}) {
  const classes = useStyles();
  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().min(3, 'Must be at least 3').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {

          window.scrollTo(0, 0);
          setStatus({ success: true });
          setSubmitting(false);

        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        touched,
        values,
        resetForm
      }) => (

        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItem}>
              <TextField
                error={getIn(errors, 'name') && getIn(touched, 'name')}
                fullWidth
                label="First Name*"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}

              />
            </Box>
            <Box className={clsx(classes.flexItem, classes.flexItemSecond)}>
              <TextField
                error={getIn(errors, 'email') && getIn(touched, 'email')}
                fullWidth
                label="Email*"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}

              />
            </Box>
          </Box>
          <Box mt={4} className={classes.flexConatiner}>
            <TextField
              error={getIn(errors, 'subject') && getIn(touched, 'subject')}
              fullWidth
              helperText={touched.subject && errors.subject}
              label="Subject"
              name="subject"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.subject}

            />
          </Box>
          <Box mt={4}>
            <TextField
              id="message"
              label="Message"

              name='message'
              onChange={handleChange}
              value={values.message}
              style={{width: '100%'}}
              multiline
              rows={4}
            />
          </Box>

          <Box
            mt={6}
            display="flex"
            alignItems='center'
          >

            <Box flexGrow={1} />
            <Box>
              <Button
                color="secondary"
                type="submit"
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Formik>

  );
}

CustomerForm.propTypes = {
  className: PropTypes.string,
};

export default CustomerForm;
