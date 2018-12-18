import React from "react";

const Contact = (props) => {
    return (
        <section id="contact">
            <h2>Contact Details</h2>
            {props.children}
        </section>
    );
};

export default Contact;