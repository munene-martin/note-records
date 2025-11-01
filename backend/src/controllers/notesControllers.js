import Note from '../models/Note.js';

export const getAllNotes = async (req, res) => {

   try {
       const notes = await Note.find();
       res.status(200).json(notes);
   } catch (error) {
    res.status(500).json({message:"Error fetching notes", error: error.message});
   }
}

export const singleNote = async(req,res)=>{
    try {
        const singleNote = await Note.findById(req.params.id);
        if(!singleNote) return res.status(404).json({ message: "Note Not Found"});
        res.status(200).json(singleNote);
    } catch (error) {
        res.status(500).json({ message: "Error fetching note", error: error.message });
    }
}


export const createNote = async (req,res) => {
   try {
    const {title, content} = req.body;
    const newNote = new Note({
        title,
        content
    });
    const savedNote = await newNote.save();
    res.status(201).json({ message: "Post Is Successful", note: savedNote });
   } catch (error) {
    res.status(500).json({ message: "Error creating note", error: error.message });
   }
}

export const updateNote = async (req,res) => {
   try {
    const {title,content}= req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content}, {new:true})
    if(!updatedNote) return res.status(404).json ({message:"Note Not Found"});
        res.status(200).json({message:"Update Is Successful", note: updatedNote});
   } catch (error) {
    res.status(500).json({ message: "Error updating note", error: error.message });
   }
}

export const deleteNote = async (req,res) => {
    try {
        const  deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json ({message:"Not Found"});
        res.status(200).json({message:"Delete Is Successful"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error: error.message });
    }
}
