import React from 'react'

const PostForm = () => {
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
                                <input type="radio" id='privacyPublic' className='form-check-input mx-2' />
                                <label htmlFor="privacyPublic" className="form-check-label"> Pubblico </label>
                            </div>
                            <div>
                                <input type="radio" id='privacyPrivate' className='form-check-input mx-2' />
                                <label htmlFor="privacyPrivate" className="form-check-label"> Bozza </label>
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
