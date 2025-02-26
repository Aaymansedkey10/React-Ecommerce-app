import { useRef, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
export const Contact = () => {
    const [isValidated, setIsValidated] = useState({
        user_name: true,
        user_email: true,
        user_number: true,
        user_address: true,
        user_message: true
    });

    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_number: "",
        user_address: "",
        user_message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const namePattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const numberPattern = /^[0-9]{10,}$/; 
        const updatedValidation = {
            user_name: namePattern.test(formData.user_name),
            user_email: emailPattern.test(formData.user_email),
            user_number: numberPattern.test(formData.user_number),
            user_address: formData.user_address.trim() !== "",
            user_message: formData.user_message.trim() !== "",
        };

        setIsValidated(updatedValidation);
        if (Object.values(updatedValidation).every((isValid) => isValid)) {
            emailjs
            .sendForm('service_1ilctyn', 'template_314rtwn', form.current, {
              publicKey: 'Ykreg4loTWs4uThbC',
            })
            .then(
              () => {
                Swal.fire({
                    title:"Your message is send success",
                    icon:"success",
                })
              },
              (error) => {
                Swal.fire({
                    title:"Your message don't send success",
                    icon:"error",
                })
              },
            );
        }
    };

    return (
        <Container fluid calssName="w-100">
            <div className="row py-3">
                <div className="col-12">
                    <h1 className="text-center fw-bold">Contact Us</h1>
                </div>
                <div className="col-12">
                    <div className="m-auto w-50 p-3">
                        <Form onSubmit={handleSubmit} ref={form}>
                            {/* Name */}
                            <FloatingLabel controlId="floatingInput" label="Your name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your name"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    required
                                />
                                {!isValidated.user_name && (
                                    <div className="alert alert-danger p-2">
                                        <p className="m-0 p-0">Please enter a valid name (letters and dashes only).</p>
                                    </div>
                                )}
                            </FloatingLabel>

                            {/* Email */}
                            <FloatingLabel controlId="floatingEmail" label="Your email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    required
                                />
                                {!isValidated.user_email && (
                                    <div className="alert alert-danger p-2">
                                        <p className="m-0 p-0">Please enter a valid email.</p>
                                    </div>
                                )}
                            </FloatingLabel>

                            {/* Number */}
                            <FloatingLabel controlId="floatingNumber" label="Your number" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your number"
                                    name="user_number"
                                    value={formData.user_number}
                                    onChange={handleChange}
                                    required
                                />
                                {!isValidated.user_number && (
                                    <div className="alert alert-danger p-2">
                                        <p className="m-0 p-0">Please enter a valid phone number (at least 10 digits).</p>
                                    </div>
                                )}
                            </FloatingLabel>

                            {/* Address */}
                            <FloatingLabel controlId="floatingAddress" label="Your address" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your address"
                                    name="user_address"
                                    value={formData.user_address}
                                    onChange={handleChange}
                                    required
                                />
                                {!isValidated.user_address && (
                                    <div className="alert alert-danger p-2">
                                        <p className="m-0 p-0">Address cannot be empty.</p>
                                    </div>
                                )}
                            </FloatingLabel>

                            {/* Message */}
                            <FloatingLabel controlId="floatingTextarea" label="Your message" className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a message here"
                                    style={{ height: "100px" }}
                                    name="user_message"
                                    value={formData.user_message}
                                    onChange={handleChange}
                                    required
                                />
                                {!isValidated.user_message && (
                                    <div className="alert alert-danger p-2">
                                        <p className="m-0 p-0">Message cannot be empty.</p>
                                    </div>
                                )}
                            </FloatingLabel>

                            {/* Submit Button */}
                            <div className="mb-3 text-center">
                                <Button type="submit" className="btn custom-btn">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};
