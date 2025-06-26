'use client'

import { useRef, useState, useTransition } from 'react';
import styled from './UploadPage.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

  
export default function UploadPage() {
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const [formData, setFormData] = useState({
        user_photo: null,
      });
      const ref = useRef<HTMLInputElement>(null)
    const router = useRouter()

    function handleBackToSessions() {
        router.back();
    
    }
    const uploadPhoto = () => {
        if(ref.current){
            ref.current.click()
        }
    }
    const handleInputChange = (e: any) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
          setFormData({
            ...formData,
            [name]: files[0],
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };

      const onSubmit = (e: any) => {
        e.preventDefault();
        // window.location.reload();
      };
  return (
    <div className={styled.root}>
        <div className={styled.root_header}>Загрузка нового изображения</div>
        <div className={styled.root_title}>Перед загрузкой снимка, изучите <span>инструкцию:</span></div>
        <div className={styled.root_title}><span>1.</span>Снимок должен быть сделан на плантоскопе;</div>
        <div className={styled.root_title}><span>2.</span>На снимке должны быть видны ваши стопы под углом в 90 градусов;</div>
        <div className={styled.root_title}><span>3.</span>Снимок должен быть достаточно хорошего качества.</div>
        <div className={styled.root_title}>После загрузки, результат появится в панели <span>результатов!</span></div>
        <div className={styled.root_buttonGroup} onClick={uploadPhoto}><button>Загрузить снимок</button>
        <input     type='file'
        style={{display: 'none'}}
                    id='user_photo'
                    ref={ref}
                    name='user_photo'
                    accept='image/*' onChange={handleInputChange}/></div>
                     {formData.user_photo && (
                <div >
                <div>
                  <img
                    src={URL.createObjectURL(formData.user_photo)}
                    alt='Превью фотографии'
                    className={styled.root_preview}
                    
                  />
                   
                </div>
                    <div className={styled.root_buttonGroup}><button type='submit'  onClick={onSubmit}>Сохранить</button></div>
                </div>
              )}
    </div>
  );
}
