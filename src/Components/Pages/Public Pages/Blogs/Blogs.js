import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto'>

            <div>
                <h2 className='mb-4 text-center'>Question 1 - JS vs Node JS</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr className='text-center'>
                            <th>JavaScript</th>
                            <th>Node JS</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                Javascript is a programming language that is used for writing scripts on the website. </td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>

                        <tr>

                            <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>

                        <tr>
                            <td>It is basically used on the client-side.	</td>
                            <td>It is mostly used on the server-side.
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>

            <div className='mt-5'>
                <h2 className='mb-4 text-center'>Question 2 - MongoDB vs Node JS</h2>
                <p> MongoDB and NodeJS are two different technologies.</p>
                <p> <span className='text-primary'>MongoDB</span> is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.</p>

                <p> <span className='text-primary'>Node JS </span>
                    is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too</p>
            </div>

            <div className='mt-5'>
                <h2 className='mb-4 text-center'>Question 3 - SQL vs NoSQL</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr className='text-center'>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>SQL databases are relational</td>
                            <td>NoSQL databases are non-relational.</td>
                        </tr>

                        <tr>

                            <td>SQL databases are table-based.</td>
                            <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>
                        </tr>

                        <tr>
                            <td>SQL databases are vertically scalable.</td>
                            <td>NoSQL databases are horizontally scalable.
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>

            <div className='mt-5'>
                <h2 className='mt-4 text-center'>Question 4 - JWT purpose & how it works?</h2>
                <p>- JWT purpose</p>
                <p><span className='text-primary'>JWT</span> (JSON Web Token) is an open standard that allows two parties (client and a server) to exchange security information. Each JWT includes encoded JSON objects as well as a set of assertions. JWTs are signed with a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>

                <p>- How it works?</p>
                <p><span className='text-primary'>JWT</span> differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blogs;