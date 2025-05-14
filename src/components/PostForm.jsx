import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const PostForm = () => {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log("elemento ", e.target)
        console.log("type", e.target.type)
        console.log("value", e.target.value)
        console.log("checked", e.target.checked)
        setFormData({
            ...formData,
            [name]: (type === 'checkbox') ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
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
                                <input type="checkbox" id='public' name='public' checked={formData.public} onChange={handleChange} className='form-check-input mx-2' />
                                <label htmlFor="public" className="form-check-label">Seleziona se vuoi che sia pubblico</label>
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
