import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Container, Box } from '@mui/material';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const { register } = useAuth();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    return (
        <Container>
            <Box mt={5}>
                <Formik
                    initialValues={{ name: '', username: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        register(values.name, values.username, values.email, values.password);
                        toast.success('Registration successful');
                        setSubmitting(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field
                                name="name"
                                as={TextField}
                                label="Name"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <Field
                                name="username"
                                as={TextField}
                                label="Username"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />
                            <Field
                                name="email"
                                as={TextField}
                                label="Email"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <Field
                                name="password"
                                as={TextField}
                                label="Password"
                                type="password"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />
                            <Button type="submit" color="primary" variant="contained" fullWidth>
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default Register;
