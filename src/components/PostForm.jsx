import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const PostForm = () => {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        update: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData).then(res => {
            console.log(res.data);
            alert('richiesta inviata con successo');
        })
    }


    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <form action="" className='border rounded bg-light p-4'>
                        <div className="col-12">
                            <input type="text" name='author' placeholder='Autore' value={formData.author} onChange={handleChange} className='form-control' />
                        </div>
                        <div className="col-12">
                            <input type="text" name='title' placeholder='Titolo' value={formData.title} onChange={handleChange} className='form-control' />
                        </div>
                        <div className="col-12">
                            <textarea name="body" id="" placeholder='Testo del post' value={formData.body} onChange={handleChange} className='form-control'></textarea>
                        </div>
                        <div className="col-12">
                            <div>
                                <input type="checkbox" id='update' name='update' checked={formData.update} onChange={handleChange} className='form-check-input mx-2' />
                                <label htmlFor="update" className="form-check-label">Seleziona se vuoi che sia pubblico</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Invia</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default PostForm
