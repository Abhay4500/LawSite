import React from 'react'

const Form = (props: any) => {
    return (
        <form className="formGrid font-serif">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={props?.formData?.name} onChange={props.handleChange} required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={props?.formData?.email} onChange={props.handleChange} required />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={props?.formData?.phone} onChange={props.handleChange} required />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value={props?.formData?.address} onChange={props.handleChange} required />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={props?.formData?.city} onChange={props.handleChange} required />
            </div>
            <div className="submitButton">
                <input type="submit" onClick={props.handleSubmit} value="Submit" />
            </div>
        </form>
    )
}

export default Form