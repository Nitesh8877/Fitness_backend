const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    firstname:{
        type:String,
        trim:true,
        required:'first name is required'
    },
    lastname:{
        type:String,
        trim:true,
        required:'Last name is required'
    },
    username:{
        type:String,
        trim:true,
        unique:true,
        required:'Username is required'
    },
    password:{
        type:String,
        trim:true,
        required:'Password is requird',
        validate:[
            function (input){
                return input.length>=6;
            },
            'Password shoulb be at least 6 character'
        ]
    },
    email:{
        type:String,
        unique:true,
        match:[/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    userCreated:{
        type:Date,
        default:Date.now
    },
    /**
     * Docter's is an array that stores objectId,
     * The ref property links these ObjectsIds to the doctor model
     * This allows us to populate the user with any associated Doctors
     */
    doctors:[
        {
            type:Schema.Types.ObjectId,
            ref:'doctor',
        }
    ],
    /**
     * "Clinics " is an array that stores ObjectId
     * The ref property links these ObjectsId to the Note model
     * this allow us to populate the User with any associated clinics
     * 
     */
    clinics:[
        {
            type:Schema.Types.ObjectId,
            ref:'hospital',
        }
    ],
    /**
     * `healthLog` is an array that stores ObjectIds,
     * The ref property links these ObjectIds to the Note Model
     * This allows us to populate the User with any associated medLog
     * 
     */
    healthLogs:[
        {
            type:Schema.Types.ObjectId,
            ref:'healthlog'
        }
    ],
     /**
     * `Perscriptions` is an array that stores ObjectIds,
     * The ref property links these ObjectIds to the Note Model
     * This allows us to populate the User with any associated Prescriptions
     * 
     */
    prescriptions:[
        {
            type:Schema.Types.ObjectId,
            ref:'prescription'
        }
    ],

     /**
     * `Attachment` is an array that stores ObjectIds,
     * The ref property links these ObjectIds to the Note Model
     * This allows us to populate the User with any associated attachment
     * 
     */
    attachments:[
        {
            type:Schema.Types.ObjectId,
            ref:'attachement'
        }
    ],

     /**
     * `symptoms` is an array that stores ObjectIds,
     * The ref property links these ObjectIds to the Note Model
     * This allows us to populate the User with any associated symptoms
     * 
     */
    symptoms:[
        {
            type:Schema.Types.ObjectId,
            ref:'symptom'
        }
    ],
     /**
     * `appointment` is an array that stores ObjectIds,
     * The ref property links these ObjectIds to the Note Model
     * This allows us to populate the User with any associated appointments
     * 
     */
    appointments:[
        {
            type:Schema.Types.ObjectId,
            ref:'appointment'
        }
    ]
     
})
const User=mongoose.model('User', UserSchema);
module.exports=User;