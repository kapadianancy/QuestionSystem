const mongoose=require("mongoose");

const LanguageSchema=mongoose.Schema({
   
    name:
    {
        type:String,
        required:true,
        unique:true
    },
    description:
    {
        type:String
    },
    isDeleted:
    {
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps: true,
});

LanguageSchema.virtual('Question', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'languageId'
})

const Language = mongoose.model("Language", LanguageSchema);

module.exports = Language;