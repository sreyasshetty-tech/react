import React from 'react';
import web from "./images/op.svg";
export const Comon = (props) => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row mt-5'>
                    <div className='col-9'>
                        <div className='my-2'>
                            UpSkill your Professional growth, CoderOP
                        </div>
                        <div className='mb-3'>
                            this is an sample {props.myname}page
                        </div>
                        <div className='btn btn-outline-success'>{props.btnname}
                            
                        </div>
                        
                    </div>
                    <div className='col-3'>
                            <img src={web} alt="svg image" className='img-fluid'/>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Comon;
