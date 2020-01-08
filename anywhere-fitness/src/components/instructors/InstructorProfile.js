import React, {useEffect} from"react";
import { CreateClass} from './instructorAddClass';
import {instructorClass} from './instructorClass';

export function InstructorProfile(){
    return(
        <div>
            <Home/>
            <div className="profileContainer">
                <CreateClass/>
                <InstructorClass/>
            </div>

        </div>
    )
}