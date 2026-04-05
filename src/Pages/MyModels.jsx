import React from 'react';
import ModelCard from '../components/ModelCard';

const MyModels = () => {
    return (
        <div>
            <div>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                     {models.map(model => <ModelCard key={model._id} model={model}/>)}
                  </div>
            
        </div> 
        </div>
    );
};

export default MyModels;