import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {
  const initialValue={
    email:"",
    password:'',
  }
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [signin,setSignin]=useState(initialValue)
  const [errorEmail,setErrorEmail]=useState(false);
  const [errorPassword,setErrorPassword]=useState(false);
  const [errormessageEmail,setErrorMessageEmail]=useState('');
  const [errormessagePassword,setErrorMessagePassword]=useState('');
  const navigate=useNavigate()
  const dynamicColorEmail = errorEmail ? `${theme.palette.error.main}` : `${theme.palette.secondary.main}`;
  const dynamicColorPassword = errorPassword ? `${theme.palette.error.main}` : `${theme.palette.secondary.main}`;

  const handelChage=(e)=>{
     setSignin({
      ...signin,[e.target.name]:e.target.value
     })
     console.log(signin);
  }
  console.log(signin);
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://keepnotesclone.onrender.com/v1/login',signin).then((res)=>{
      console.log(res.data);
      if (res.status === 200) {
        navigate('/home');
      } 
    }).catch((err)=>{
      console.error('Error:', err);
      
      if (err.response && err.response.status === 404) {
        setErrorEmail(true);
        setErrorMessageEmail('Email does not exists.')
      }else if(err.response && err.response.status === 401){
        setErrorPassword(true);
        setErrorMessagePassword('Incorrect Password')
      } else {
        console.error('Unexpected error:', err);
      }
    })

  }
 
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
 
  return (
    <>

      <Grid>
        <Paper
          elevation={12}
          sx={{
            height: "500px",
            width: "350px",
            margin: "70px auto",
            paddingTop: "60px",
            background: "#202124",
            border: `${theme.palette.secondary.main}`,
            boxShadow: "0px 0px 20px 0px #fbbd05",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <Grid align="center">
            <Avatar sx={{ background: `${theme.palette.secondary.main}` }}>
              <LockIcon />
            </Avatar>
            <Typography
              variant="h2"
              sx={{
                margin: "20px 0px",
                color: `${theme.palette.primary.contrastText}`,
              }}
            >
              Login In
            </Typography>
          </Grid>
          <Grid align="center" sx={{ padding: "20px" }}>
            <form onSubmit={handleSubmit}>
              <Grid sx={{ marginTop: '10px' }}>
                <TextField
                  id="outlined-text-input"
                  label="Email"
                  placeholder="Email"
                  fullWidth
                  type="email"
                  required
                  name="email"
                  value={signin.email}
                  onChange={handelChage}
                  error={errorEmail}
                  InputProps={{
                    sx: {
                      fontSize: "18px", // Change font size
                      color: dynamicColorEmail, // Change text color
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.secondary.main}`, // Change outline color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.secondary.main}`, // Change outline color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.secondary.main}`, // Change outline color when focused
                      },
                      "& input::placeholder": {
                        color: `${theme.palette.secondary.main}`, // Change placeholder color
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: '18px',
                      color: `${theme.palette.secondary.main}`, // Change label color
                      "&.Mui-focused": {
                        color: theme.palette.secondary.main, // Change label color on focus
                      },
                    },
                  }}
                />
                <Typography variant="subtitle1" sx={{color:`${theme.palette.error.main}`,textAlign:'start'}}>{errormessageEmail}</Typography>
              </Grid>

              <Grid sx={{ marginTop: '10px' }}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  fullWidth
                  required
                  name="password"
                  value={signin.password}
                  onChange={handelChage}
                  sx={{ marginTop: "10px" }}
                  error={errorPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff
                              sx={{
                                cursor: "pointer",
                                color: theme.palette.secondary.main,
                              }}
                            />
                          ) : (
                            <Visibility
                              sx={{
                                cursor: "pointer",
                                color: theme.palette.secondary.main,
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {

                      fontSize: "18px", // Change font size
                      color: dynamicColorPassword, // Change text color
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.secondary.main}`, // Change outline color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.secondary.main}`, // Change outline color on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${theme.palette.secondary.main}`, // Change outline color when focused
                      },
                      "& input::placeholder": {
                        color: `${theme.palette.secondary.main}`, // Change placeholder color
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: '18px',
                      color: `${theme.palette.secondary.main}`, // Change label color
                      "&.Mui-focused": {
                        color: theme.palette.secondary.main, // Change label color on focus
                      },
                    },
                  }}
                />
                <Typography variant="subtitle1" sx={{color:`${theme.palette.error.main}`,textAlign:'start'}}>{errormessagePassword}</Typography>
              </Grid>
              <Grid sx={{ marginTop: '10px' }}>
                <Button
                  type="submit"
                  disableRipple={true}
                  sx={{
                    backgroundColor: `${theme.palette.secondary.main}`,
                    color: `${theme.palette.primary.main}`,
                    marginTop: "20px",
                    width: "25%",
                    borderRadius: "16px",
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.main}`, // No change in background color on hover
                      color: `${theme.palette.secondary.main}`, // No change in text color on hover
                      boxShadow: "0px 0px 20px 0px #fbbd05",
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
          <Link to='/signup'>
            <Button
              disableRipple={true}
              sx={{
                color: `${theme.palette.primary.contrastText}`,
                "&:hover": {
                  color: `${theme.palette.secondary.main}`,
                },
              }}
            >
              Or Sign Up?
            </Button>
          </Link>

        </Paper>
      </Grid>
    </>
  );
};

export default Login;
