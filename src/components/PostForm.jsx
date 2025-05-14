import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const PostForm = () => {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        updates: false
    })


    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <form action="" className='border rounded bg-light p-4'>
                        <div className="col-12">
                            <input type="text" name='author' placeholder='Autore' className='form-control' />
                        </div>
                        <div className="col-12">
                            <input type="text" name='title' placeholder='Titolo' className='form-control' />
                        </div>
                        <div className="col-12">
                            <textarea name="body" id="" placeholder='Testo del post' className='form-control'></textarea>
                        </div>
                        <div className="col-12">
                            <div>
                                <input type="checkbox" id='update' name='update' className='form-check-input mx-2' />
                                <label htmlFor="updates" className="form-check-labelq">Seleziona se vuoi che sia pubblico</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary'>Invia</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default PostForm
