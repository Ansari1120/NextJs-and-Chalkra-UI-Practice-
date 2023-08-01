"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
export default function Login() {
  const params = useSearchParams();
  const [cridentials, setCridentials] = useState({
    email: "",
    password: "",
    // confirm_Password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>([]);
  const submitForm = () => {
    setLoading(true);
    console.log(cridentials);
    axios
      .post("/api/auth/login", cridentials)
      .then((res: any) => {
        setLoading(false);
        console.log(res);
        const response = res.data;
        if (response.status == 200) {
          console.log(response.message);
          signIn("credentials", {
            email: cridentials.email,
            password: cridentials.password,
            callbackUrl: "/",
            redirect: true,
          });
        } else if (response?.status == 404) {
          console.log(response.message);
          if (response.message) {
            setErrors(response);
          } else {
            const { errors } = response;
            setErrors(errors);
          }
        } else {
          const { errors } = response;
          setErrors(errors);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log("somethng went wrong", e);
      });
  };

  const GithubSignin = () => {
    signIn("github", {
      callbackUrl: "/",
      redirect: true,
    });
  };
  console.log(errors);
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in
            </h2>
            {params.get("message") ? (
              <p className="mt-2 bg-green-500 font-bold rounded-md p-4">
                {params.get("message")}
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  title="navigate to registration page"
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
            )}
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setCridentials({
                          ...cridentials,
                          email: e.target.value,
                        })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors.length >= 2 && !errors.message
                        ? errors
                            .filter((obj: any) => obj.field == "email")
                            .map((obj: any) => obj.message)
                        : errors.message}
                      {/* {errors} */}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setCridentials({
                          ...cridentials,
                          password: e.target.value,
                        })
                      }
                    ></input>
                    <span className="text-red-500 font-bold">
                      {errors.length >= 2 && !errors.message
                        ? errors
                            .filter((obj: any) => obj.field == "password")
                            .map((obj: any) => obj.message)
                        : ""}
                    </span>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Confirm Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setCridentials({
                          ...cridentials,
                          confirm_Password: e.target.value,
                        })
                      }
                    ></input>
                  </div> */}
                </div>
                <div>
                  <button
                    onClick={submitForm}
                    type="button"
                    className={`inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${
                      loading ? "bg-gray" : "bg-black"
                    }`}
                  >
                    {loading ? "processing..." : "Sign in"}
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center my-5">
              ------------------ OR ------------------
            </p>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              onClick={GithubSignin}
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                  </svg>
                </span>
                Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

// http://localhost:3000/login

// https://vinejs.dev/docs/error_reporter

// https://www.devui.io/components/signin

// https://next-auth.js.org/providers/credentials

// https://cloud.mongodb.com/v2/64be9209fbb37e4ae8393d13#/metrics/replicaSet/64be923787f1c45fa345c5d1/explorer/test/users/find

// https://github.com/TusharVashishth/Nextjs_Authentication/blob/main/src/models/User.ts

// https://www.youtube.com/watch?v=lfX8nuWwrOc&t=3803s
