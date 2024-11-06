
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

          label: "Address Line 1",
          name: "addressLine1",
          placeholder: "Address Line 1",
          isPassword: false,
          isNum: false,
          validate: true,
          errorMessage: "This info is required and may only contain letters, number and #",


     },
     {
          label: "Address Line 2 (Optional)",
          name: "addressLine2",
          placeholder: "Address Line 2",
          isPassword: false,
          isNum: false,
          validate: false,
          errorMessage: "",


     },
     {
          label: "Zip Code",
          name: "postalCode",
          placeholder: "Zip Code",
          isPassword: false,
          isNum: true,
          validate: true,
          errorMessage: "Please enter your 5-digit zip code",


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
          name: "Alabama",
          abbrev: "AL"
     },
     {
          name: "Alaska",
          abbrev: "AK"
     },
     {
          name: "Arizona",
          abbrev: "AZ"
     },
     {
          name: "California",
          abbrev: "CA"
     },
     {
          name: "Colorado",
          abbrev: "CO"
     },
     {
          name: "Connecticut",
          abbrev: "CT"
     },
     {
          name: "Delaware",
          abbrev: "DE"
     },
     {
          name: "District of Columbia",
          abbrev: "DC"
     },
     {
          name: "Georgia",
          abbrev: "GA"
     },
     {
          name: "Hawaii",
          abbrev: "HI"
     },
     {
          name: "Idaho",
          abbrev: "ID"
     },
     {
          name: "Illinois",
          abbrev: "IL"
     },
     {
          name: "Indiana",
          abbrev: "IN"
     },
     {
          name: "Iowa",
          abbrev: "IA"
     },
     {
          name: "Kansas",
          abbrev: "KS"
     },
     {
          name: "Louisiana",
          abbrev: "LA"
     },
     {
          name: "Maine",
          abbrev: "ME"
     },
     {
          name: "Maryland",
          abbrev: "MD"
     },
     {
          name: "Massachusetts",
          abbrev: "MA"
     },
     {
          name: "Michigan",
          abbrev: "MI"
     },
     {
          name: "Minnesota",
          abbrev: "MN"
     },
     {
          name: "Mississippi",
          abbrev: "MS"
     },
     {
          name: "Missouri",
          abbrev: "MO"
     },
     {
          name: "Montana",
          abbrev: "MT"
     },
     {
          name: "Nebraska",
          abbrev: "NE"
     },
     {
          name: "Nevada",
          abbrev: "NV"
     },
     {
          name: "New Hampshire",
          abbrev: "NH"
     },
     {
          name: "New Jersey",
          abbrev: "NJ"
     },
     {
          name: "New Mexico",
          abbrev: "NM"
     },
     {
          name: "New York",
          abbrev: "NY"
     },
     {
          name: "North Carolina",
          abbrev: "NC"
     },
     {
          name: "North Dakota",
          abbrev: "ND"
     },
     {
          name: "Oklahoma",
          abbrev: "Ok"
     },
     {
          name: "Oregon",
          abbrev: "OR"
     },
     {
          name: "Pennsylvania",
          abbrev: "PA"
     },
     {
          name: "Puerto Rico",
          abbrev: "PR"
     },
     {
          name: "Rhode Island",
          abbrev: "RI"
     },
     {
          name: "South Carolina",
          abbrev: "South Dakota"
     },
     {
          name: "Tennessee",
          abbrev: "TN"
     },
     {
          name: "Texas",
          abbrev: "TX"
     },
     {
          name: "Utah",
          abbrev: "UT"
     },
     {
          name: "Vermont",
          abbrev: "VT"
     },
     {
          name: "Virginia",
          abbrev: "VA"
     },
     {
          name: "West Virginia",
          abbrev: "WV"
     },
     {
          name: "Wisconsin",
          abbrev: "WI"
     },
     {
          name: "Wyoming",
          abbrev: "WY"
     },


];