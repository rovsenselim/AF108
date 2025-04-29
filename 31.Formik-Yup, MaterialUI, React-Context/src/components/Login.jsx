import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, Container, Box } from '@mui/material';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { login } = useAuth();

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <Container>
            <Box mt={5}>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        login(values.username, values.password);
                        toast.success('Login successful');
                        setSubmitting(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
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
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default Login;
