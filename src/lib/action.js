
// export const handleRegister = async (formData) => {
//     "use server";
//     // Create a new instance of the formData object
//     const data = new URLSearchParams(formData);
  
//     // Destructure the values
//     const email = data.get('email');
//     const name = data.get('name');
//     const password = data.get('password');
  
//     // Log the values
//     console.log(email, name, password);
//   };

export const handleRegister = async (formData) => {
    "use server";
    // const email = formData.get('email');
    // const name = formData.get('name');
    // const password = formData.get('password');
    const{email,password,name}=Object.fromEntries(formData)
    console.log(email, name, password);
  };

// export const handleRegister = async (formData) => {
//     "use server";
//     const data = {};
//     for (const [key, value] of formData.entries()) {
//       data[key] = value;
//     }
//     const { email, name, password } = data;
//     console.log(email, name, password);
//   };

// export const handleRegister = async (formData) => {
//     "use server";
//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
//     const jsonData = JSON.stringify(data);
//     console.log(jsonData);
//   };
  
  
  