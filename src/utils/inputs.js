
export const createAccountInputs = [

     {

          name: "firstName",
          placeholder: "First Name",
          isPassword: false,
          errorMessage: "Please enter a first name",
          validate: true



     },
     {

          name: "lastName",
          placeholder: "Last Name",
          isPassword: false,
          errorMessage: "Please enter a last name",
          validate: true



     },
     {

          name: "email",
          placeholder: "Email",
          isPassword: false,
          validate: true,
          errorMessage: "Please enter a valid email address",


     },
     {

          name: "password",
          placeholder: "Password",
          isPassword: true,
          errorMessage: "The password field cannot be empty.",
          validate: true

     },

];

export const signInInputs = [


     {

          name: "email",
          placeholder: "Email",
          isPassword: false,
          validate: true,
          errorMessage: "Please enter a valid email address",
          // pattern: "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"


     },
     {
          name: "password",
          placeholder: "Password",
          isPassword: true,
          validate: true,
          errorMessage: "The password field cannot be empty."

     },

];

export const forgotInputs = [


     {

          name: "email",
          placeholder: "Email",
          isPassword: false,
          validate: true,
          errorMessage: "Please enter a valid email address",


     }

];


export const twoFaInputs = [


     {

          name: "code",
          placeholder: "Code",
          isPassword: false,
          validate: true,
          errorMessage: "Please enter the code sent to your email address",


     },



];


export const adminSignInInputs = [


     {

          name: "userName",
          placeholder: "User name",
          isPassword: false,
          validate: true,
          errorMessage: "Please enter a user name",


     },

     {
          name: "password",
          placeholder: "Password",
          isPassword: true,
          validate: true,
          errorMessage: "The password field cannot be empty."
     }



];


export const addAddressInputs = [

     {

          label: "Street",
          name: "street",
          placeholder: "Street",
          isPassword: false,
          isNum: false,
          validate: true,
          errorMessage: "This info is required and may only contain letters, number and #",


     },
   
     {
          label: "City",
          name: "city",
          placeholder: "City",
          isPassword: false,
          isNum: false,
          validate: true,
          errorMessage: "Please enter your city",


     },




];


export const contactInputs = [



     {

          name: "email",
          placeholder: "Email*",
          isPassword: false,
          errorMessage: "Please enter a valid email address",
          validate: true

          // pattern: "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"


     },
     {

          name: "phoneNumber",
          placeholder: "Phone Number*",
          isPassword: false,
          errorMessage: "The phone number is required.",
          validate: true


     },

];

export const changePwdInputs = [

     {


          label: "Current Password",
          name: "currentPassword",
          placeholder: "Current Password",
          isPassword: true,
          isNum: false,
          validate: true,
          errorMessage: "Please enter your current password.",


     },
     {


          label: "New Password",
          name: "newPassword",
          placeholder: "New Password",
          isPassword: true,
          isNum: false,
          validate: true,
          errorMessage: "The password field cannot be empty.",


     },
     {


          label: "Confirm New Password",
          name: "confirmNewPassword",
          placeholder: "Confirm New Password",
          isPassword: true,
          isNum: false,
          validate: true,
          errorMessage: "The password does not match the new password",


     }





];

export const PersonalInfoInputs = [

     {


          label: "First name",
          name: "firstName",
          placeholder: "First name",
          isPassword: false,
          isNum: false,
          validate: true,
          errorMessage: "Please enter your first name",


     },
     {


          label: "Last name",
          name: "lastName",
          placeholder: "Last name",
          isPassword: false,
          isNum: false,
          validate: true,
          errorMessage: "Please enter your last name",


     },
     {


          label: "Phone number",
          name: "phoneNumber",
          placeholder: "Phone number",
          isPassword: false,
          isNum: false,
          validate: true,
          errorMessage: "Please enter your phone number",


     },
     


];

export const states = [

     {
          name: "Abuja",
          abbrev: "FC"
     },
     {
          name: "Abia",
          abbrev: "AB"
     },
     {
          name: "Adamawa",
          abbrev: "AD"
     },
     {
          name: "Akwa Ibom",
          abbrev: "Ak"
     },
     {
          name: "Anambra",
          abbrev: "AN"
     },
     {
          name: "bauchi",
          abbrev: "BA"
     },
     {
          name: "Bayelsa",
          abbrev: "By"
     },
     {
          name: "Benue",
          abbrev: "BE"
     },
     {
          name: "Borno",
          abbrev: "BO"
     },
     {
          name: "Cross River",
          abbrev: "CR"
     },
     {
          name: "Delta",
          abbrev: "DE"
     },
     {
          name: "Ebonyi",
          abbrev: "IL"
     },
     {
          name: "Edo",
          abbrev: "ED"
     },
     {
          name: "Ekiti",
          abbrev: "EK"
     },
     {
          name: "Enugu",
          abbrev: "EN"
     },
     {
          name: "Gombe",
          abbrev: "GO"
     },
     {
          name: "Imo",
          abbrev: "IM"
     },
     {
          name: "Jigawa",
          abbrev: "JI"
     },
     {
          name: "Kaduna",
          abbrev: "KD"
     },
     {
          name: "Kano",
          abbrev: "KN"
     },
     {
          name: "Katsina",
          abbrev: "KT"
     },
     {
          name: "Kebbi",
          abbrev: "KE"
     },
     {
          name: "Kogi",
          abbrev: "KO"
     },
     {
          name: "Kwara",
          abbrev: "KW"
     },
     {
          name: "Lagos",
          abbrev: "LA"
     },
     {
          name: "Nassarawa",
          abbrev: "NA"
     },
     {
          name: "Niger",
          abbrev: "NI"
     },
     {
          name: "Ogun",
          abbrev: "OG"
     },
     {
          name: "Ondo",
          abbrev: "ON"
     },
     {
          name: "Osun",
          abbrev: "OS"
     },
     {
          name: "Oyo",
          abbrev: "OY"
     },
     {
          name: "Plateau",
          abbrev: "PL"
     },
     {
          name: "Rivers",
          abbrev: "RI"
     },
     {
          name: "Sokoto",
          abbrev: "SO"
     },
     {
          name: "Taraba",
          abbrev: "TA"
     },
     {
          name: "Yobe",
          abbrev: "YO"
     },
     {
          name: "Zamfara",
          abbrev: "ZA"
     },
    

];