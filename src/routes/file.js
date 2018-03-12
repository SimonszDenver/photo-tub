// var express = require('express');
// var _router = express.Router();
// var multer = require('multer');
//
// var store = multer.diskStorage({
//   destination:function(req,fille,cb){
//     cb(null,'../assets/uploaded-images');
//   },
//   filename:function (req,file,cb) {
//     cb(null,Date.now()+'.'+file.originalname);
//   }
// });
//
// var upload = multer({storage:store}).single('file');
//
// _router.post('../../assets/uploaded-images',function (req, res, next) {
//   upload(req,res,function (err) {
//     if(err){
//       return res.status(501).json({error:err});
//     }
//
//     res.json({originalname:req.file.originalname, uploadname:req.file.filename()})
//   })
// });
//
// module.exports = _router;
