import React, { useEffect } from 'react';
import axios from 'axios'
import '../../assets/style/Body.css';
import Container from '../Container';

function Body() {

    useEffect(() => {
        axios.get('/api/v1/user/all-users')
            .then(res => {
                console.log(res.data);
            });
    }, [])

    const data = {
        own: {
            name: "Shivam"
        },
        children: [
            {
                own: {
                    name: "Sandeep"
                },
                children: [
                    {
                        own: {
                            name: "Ravi"
                        },
                        children: []
                    },
                    {
                        own: {
                            name: "Pratik"
                        },
                        children: [
                            {
                                own: {
                                    name: "Diya"
                                },
                                children: []
                            },
                            {
                                own: {
                                    name: "Rahul"
                                },
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                own: {
                    name: "Jagdish"
                },
                children: [
                    {
                        own: {
                            name: "Akash"
                        },
                        children: []
                    }
                ]
            }
        ]
    }

    return (
        <div id="Body">
            <Container data={data} root={true} />
        </div>
    )
}

export default Body
