import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Create a ref for the modal
  const modalRef = useRef(null);

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data);
    // Close the modal if it's open
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('name', { required: true })}
                /> <br />
                {errors.name && <span className="text-red-500">Name is required</span>}
                <br />
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('email', { required: true })}
                /> <br />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('password', { required: true })}
                /> <br />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-8">
                <button
                  type="submit"
                  className="text-xl bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200 text-white"
                >
                  SignUp
                </button>
                <p className="text-xl">
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => modalRef.current.showModal()}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Login Modal */}
          <dialog id="my_modal_3" ref={modalRef} className="modal">
            <Login />
          </dialog>
        </div>
      </div>
    </>
  );
}

export default Signup;
