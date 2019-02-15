import fs from 'fs';

const ParentDir = '/home/ashwinik/time_pass/public/';


class FileUploader {

    static saveImageToDir(file){
        const subDir = new this().dirSelector(file.mimetype);
        const targetDir = ParentDir + subDir;
        return new Promise(function (resolve, reject){
            const timeStamp = new Date().getTime();
            fs.writeFile(targetDir+'/'+timeStamp, file.buffer, 'binary',  function (err) {
                if (err) reject(err);
                else resolve({type: subDir,  path: targetDir+'/'+timeStamp})
            })
        })
    }

    dirSelector(type){
        var mimeTypeArray = type.split('/');
        if(mimeTypeArray[0] === 'image' && mimeTypeArray[1] === 'gif'){
            return 'GIF'
        }
        else if (mimeTypeArray[0] === 'image' && mimeTypeArray[1] !== 'gif'){
            return 'IMAGES'
        }
    }
}

export default FileUploader;