import classes from "./block-3.module.css";
import Title from "../../../components/title/title";
import uploadIcon from "../../../assets/icons/from-file.svg";
import { useState } from "react";

export default function Block3({ className, active }) {
    const [image, setImage] = useState(null);
    const [imageInfo, setImageInfo] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setImageInfo(file);
            }
            reader.readAsDataURL(file);
        }
    }

    function formatFileSize(bytes) {
        if (bytes < 1024) {
            return bytes + " Б";
        } else if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(2) + " КБ";
        } else if (bytes < 1024 * 1024 * 1024) {
            return (bytes / (1024 * 1024)).toFixed(2) + " МБ";
        } else {
            return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " ГБ";
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
    }

    function handleDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    function handleDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setImageInfo(file);
            }
            reader.readAsDataURL(file);
        }
    }


    return (
        <div className={`${active ? `${classes.container} ${className}` : classes.hidden}`}>
            <Title>Загрузка изображения</Title>
            <div className={classes.previewAndData}>
                <div
                    className={`${classes.preview} ${isDragging ? classes.dragging : classes.calm}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {image ?
                        <img src={image} alt="preview" />
                    :
                    <p className={classes.dropText}>Перетащите изображение в эту область или загрузите с файла</p>}
                </div>
                <div className={classes.data}>
                    <p className={classes.text}>Имя файла: {imageInfo ? imageInfo.name : "..."}</p>
                    <p className={classes.text}>Тип файла: {imageInfo ? imageInfo.type : "..."}</p>
                    <p className={classes.text}>Размер файла: {imageInfo ? formatFileSize(imageInfo.size) : "..."}</p>
                </div>
            </div>
            <label htmlFor="inputFile" className={classes.uploadButton}>
                <img src={uploadIcon} alt="upload" />
                <p className={classes.text}>С файла</p>
            </label>
            <input
                className={classes.inputFile}
                id="inputFile"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
        </div>
    );
}