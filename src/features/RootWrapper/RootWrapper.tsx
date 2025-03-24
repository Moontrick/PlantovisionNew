import { SideBar } from "../../widges/SideBar";
import { RootWrapperProps } from "./types";
import styles from './RootWrapper.module.scss';

export const RootWrapper = ({children}: RootWrapperProps) => {

    return (
        <div style={{ height: "100dvh", background: "var(--steel-50)", display: 'flex', flexWrap: 'nowrap', gap: '1vw', padding: '2%'}}
        >
          <div
            style={{
              background:'var(--unique-white-10)',
              boxShadow:'var(--shadow-500)',
              display:"flex",
              border:'1px solid var(--steel-170)',
              borderRadius:'12px',
              justifyContent:"center",
              width:'20.79vw',
              height:'100%',
              gap:0,
              paddingBottom:'2vw',
            }}
           
          >
            <SideBar />
          </div>
          <div
          style={{
            background:'var(--unique-white-10)',
            boxShadow:'var(--shadow-500)',
            display:"flex",
            border:'1px solid var(--steel-170)',
            borderRadius:'12px', 
            justifyContent:"center",
            alignItems:"center",
            width:'100vw',
            height:'100%',
            gap:0,
            overflow: 'hidden'
          }}
          >
            {children}
          </div>
        </div>
    );
  };