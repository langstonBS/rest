import React from 'react';
import PropTypes from 'prop-types';

const FormDisplay = ({ onSubmit, url, body, onChange }) => (
  
  <form onSubmit={onSubmit}>

    <label>
      URL
      <input type="text" value={url} name="url" onChange={onChange}/>
    </label>
    
    <div className="radio">
      <label>
        <input type="radio" value="post" name="raidioButton" onChange={onChange} />
            Post
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="get" name="raidioButton" defaultChecked onChange={onChange} />
            Get
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="put" name="raidioButton" onChange={onChange} />
            Put
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="delete" name="raidioButton" onChange={onChange} />
            Delete
      </label>
    </div>
    <textarea type="text" value={body} name="body" onChange={onChange} />
    <button>Submit</button>
  </form>
  
);

FormDisplay.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};


export default FormDisplay;
