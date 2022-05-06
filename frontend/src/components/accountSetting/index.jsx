import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import './acount.css'

const Account = (props) => {
  const { userName } = props;
  const [user, setUser] = useState({});

  useEffect(() => {
    alldata();
  }, [])

  const alldata = async () => {
    const body = {
      username: userName
    }
    try {
      const res = await axios.post("http://127.0.0.1:8000/users/account/", body);
      const data = { ...res.data };
      setUser(data);
    } catch (error) {
    }
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password_old: "",
    password: "",
    password_again: ""
  });

  const { firstname, lastname, phone, email, password_old, password, password_again } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const id = user.id;

  // function TabPanel(props) {
  //   const { children, value, index, ...other } = props;

  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box sx={{ p: 3 }}>
  //           <Typography>{children}</Typography>
  //         </Box>
  //       )}
  //     </div>
  //   );
  // }

  // TabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.number.isRequired,
  //   value: PropTypes.number.isRequired,
  // };

  // function a11yProps(index) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_again) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
      const newUser = {
        firstname,
        lastname,
        phone,
        email,
        password_old,
        password,
        password_again,
        id
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("http://127.0.0.1:8000/users/update/", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="merchant-area-v7">
      <div className="compliance-container" style={{ margin: "40px 20px 0px 270px" }}>
        <nav className="compliance__nav">
          <ul className="nav__list">
            <li className="list__item list__item--sel">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Account Details</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Feed Settings</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Sub-Accounts</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">SpiderPipe Accounts</Link></div>
            </li>
            <li className="list__item ">
              <div className="item__link"><Link to="" className="link__title link__title--no-counter">Reporting Settings</Link></div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="compliance">
        <form className="form_big" encType="multipart/form-data" method="POST" id="form_submit" onSubmit={(e) => onSubmit(e)}>
          <input id="js-avatar" type="hidden" name="data[avatar]" />
          <div className="compliance__information">
            <div className="information__section">
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Your name:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input maxLength="30" defaultValue={user.name} onChange={onChange} name="firstname" type="text" placeholder="First Name" className="control__input" /></div>
                  {/* <div className="control control--md"><input maxLength="30" defaultValue="K" onChange={onChange} name="lastname" type="text" placeholder="Last Name" className="control__input" /></div> */}
                </div>
              </div>
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Phone number:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input name="phone" defaultValue={user.phonenumber} onChange={onChange} maxLength="15" type="text" className="control__input" /></div>
                </div>
              </div>
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Email:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input name="email" defaultValue={user.email} onChange={onChange} maxLength="50" type="text" placeholder="Email address" className="control__input" /></div>
                </div>
              </div>
              <div className="section__field-group"><label className="field-group__label"><span className="field-group__label-inner">Password:</span></label>
                <div className="field-group__line">
                  <div className="control control--md"><input maxLength="32" defaultValue="" name="password_old" onChange={onChange} type="password" placeholder="Current password" className="control__input" /></div>
                </div>
                {/* <div className="field-group__line password">
                  <div className="control control--md"><input maxLength="32" defaultValue="" name="password" onChange={onChange} type="password" placeholder="New password" className="control__input" /></div>
                </div>
                <div className="field-group__line password">
                  <div className="control control--md"><input maxLength="32" defaultValue="" name="password_again" onChange={onChange} type="password" placeholder="New password one more time" className="control__input" /></div>
                </div> */}
              </div>
              <div className="section__field-group">
                <div className="field-group__line"></div>
              </div>
              <Link to="#" id="js-show-password" className="section__add section__add--password">Change password</Link>
              <Link to="#" id="js-hide-password" className="section__add section__add--password" style={{ display: "none" }}>Hide fields, I don't want to change password</Link></div>
            <section className="information__footer"><input defaultValue="Cancel" type="button" id="form_cancel" className="but big cancel" style={{ float: "left", marginRight: "20px", display: "none" }} />
              <button to="#" className="compliance-button compliance-button--next" type='submit'>Save</button>
            </section>
          </div>
        </form>
      </div>
      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box> */}

    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    userName: state.userName
  });
}
export default connect(mapStateToProps, null)(Account);