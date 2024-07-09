import React from "react";

const Form = () => {
  return (
    <div className="h-screen text-6xl mt-24">
      <p className="text-xl">Fill the form below:</p>
      <form className="mt-12">
        <p>
          Hi! My name is{" "}
          <input
            className="text-center text-base underline-offset-4"
            name="name"
            type="text"
            id=""
            placeholder="enter your name"
          />
          and I work with
          <input
            className="text-center text-base"
            name="company"
            type="text"
            id=""
            placeholder="Company name type here"
          />
          I’m looking for a partner to help me with
          <input
            className="text-center text-base"
            name="goal"
            type="text"
            id=""
            placeholder="Your Goal type here"
          />
          With an idea of having that completed
          <input
            className="text-center text-base"
            name="date"
            type="date"
            id=""
            placeholder="Date"
          />
          I am hoping to stay around a budget range of
          <input
            className="text-center text-base"
            name="company"
            type="text"
            id=""
            placeholder="Select"
          />
          You can reach me at to start the conversation.
          <input
            className="text-center text-base"
            name="email"
            type="text"
            id=""
            placeholder="name@email.com"
          />
          Optionally, i’m sharing more:
          <input
            className="text-center text-base"
            name="details"
            type="text"
            id=""
            placeholder="Product details type here"
          />
        </p>
        <div></div>
      </form>
      <div className="h-screen"></div>
    </div>
  );
};

export default Form;
