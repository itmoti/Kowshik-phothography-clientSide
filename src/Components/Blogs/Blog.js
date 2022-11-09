import React from 'react';
import UseTitle from '../CustomHooks/UseTitle';

const Blogs = () => {
    UseTitle('Blogs')
    return (
    < div className='w-3/4 mx-auto'>

        <div>
            <h1 className='text-2xl font-bold'>1.Difference between SQL and NoSQL</h1>
            <p className='text-lg'><code>Ans. </code>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. </p>
        </div>
        <div>
            <h1 className='text-2xl font-bold'>2. What is JWT, and how does it work?</h1>
            <p className='text-lg'><code>Ans. </code>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). </p>
        </div>
        <div>
            <h1 className='text-2xl font-bold'>3. What is the difference between javascript and Node JS?</h1>
            <p className='text-lg'><code>Ans. </code>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. </p>
        </div>
        <div>
            <h1 className='text-2xl font-bold'>4. How does NodeJS handle multiple requests at the same time?</h1>
            <p className='text-lg'><code>Ans. </code> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. </p>
        </div>

    </div>);
};

export default Blogs;