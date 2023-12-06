import React, { Suspense, useRef, useState } from 'react'
import emailjs  from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../components/Loader'


const Contact = () => {
    const formRef=useRef(null); //reference
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [currentAnimation, setCurrentAnimation] = useState('idle')

    const handleChange = (e) => { //callBack function
        setForm({...form, [e.target.name]: e.target.value})
    }

    //To find... Is user going to enter name and ....
    const handleFocus = () => {  //When user click on it
        setCurrentAnimation('walk')
    }
    const handleBlur = () => { //When user click out
        setCurrentAnimation('idle')
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //Not reload our page after we submitted
        setIsLoading(true)
        setCurrentAnimation('run')

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {//THIS IS THE OBJECT GOING TO PASS
                from_name:form.name,
                to_name:"NRM",
                from_email:form.email,
                to_email:'niman.ransindu@gmail.com',
                message:form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            //TODO : Show success message
            //TODO : Hide an alert
            setTimeout(()=>{
                setCurrentAnimation('idle')
                setForm({name:'',email:'',message:''})
            },[3000])
        }).catch((error)=>{
            setIsLoading(false);
            setCurrentAnimation('idle')
            console.log(error)
            //TODO : Show error message
        })
    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className="head-text">Get in Touch</h1>
                <form
                    className="w-full flex flex-col gap-7 mt-14"
                    onSubmit={handleSubmit}
                >
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder='john@example.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Your Message
                        <textarea
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder='Let me know how can I help you!'
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button 
                        type='submit'
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...':'Send Messages'}
                    </button>
                </form>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position:[0,0,5],
                        fov:75,
                        near:0.1,
                        far:1000
                    }}
                >
                    <directionalLight intensity={2.5} position={[0,0,1]}/>
                    <ambientLight intensity={0.5}/>
                    <Suspense fallback={<Loader/>}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5,0.35,0]}
                            rotation={[12.6,-0.6,0]}
                            scale={[0.5,0.5,0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact