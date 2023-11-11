import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

function Login() {

    const dispatch = useDispatch()

    const initialState = {
        name:"",
        password:"",
        image:""
    }

        const [values,setValues] = useState(initialState)

        const onChange = (e)=>{
            setValues({...values,[e.target.name]:e.target.value })
        }
        

  return (
    <div className='h-[100vh] flex items-center justify-center m-auto'>
         <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Name" size="lg" type='text' name='name' onChange={onChange} />
        <Input label="Password" size="lg"  type='password' name='password' onChange={onChange} />
        <Input label="Image URL address" size="lg" type='password' name='image'onChange={onChange}  />
        <div className="-ml-2.5">
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
        onClick={()=>dispatch(login(values))} 
        variant="gradient" fullWidth>
          Sign In
        </Button>
        <div className='text-center capitalize mt-3'>
            image is optional
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login