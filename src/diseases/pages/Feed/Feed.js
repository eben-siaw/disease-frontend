import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiseases } from '../../../store/diseases/diseaseSlice';
import InfoCard from "./components/info-card/InfoCard";
import Slideshow from '../../../shared/components/slide';

function Feed() {
    const dispatch = useDispatch();

    // const diseases = useSelector(state => {
    //     return state.diseases.diseases;
    // }); 

    const diseases = [ 
     {name: 'Stroke', description: 'a disease', id:1}, 
     {name: 'Diabetes', description: 'a disease', id: 2}, 
     {name: 'Lungs Respiratory', description: 'a disease', id: 3}, 
     {name: 'Coronavirus', description: 'a disease', id: 4},
     {name: 'Malaria', description: 'a disease', id: 5}
    ]

    useEffect(() => {
        dispatch(fetchDiseases(0));
    }, []);

    return (
        <div className="feed-box"> 
           <Slideshow />
            <div> 
            {
                diseases.map(disease => (
                    <div key={disease.id} className="feed-content">
                        <InfoCard disease={disease} />
                    </div>)
                )
            } 
            </div>
        </div>
    )
}

export default Feed;