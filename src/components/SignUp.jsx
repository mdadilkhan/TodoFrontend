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
import { LinearProgress } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
    const theme = useTheme();
    const initialValue={
        email:"",
        userName:"",
        password:""

    }
    const [error,setError]=useState(false) 
    const [errormessage,setErrorMessage]=useState("") 
    const [signup,setSingup]=useState(initialValue)
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside handle submit", signup);
      
        axios.post('https://keepnotesclone.onrender.com/v1/register', signup)
          .then((res) => {
            console.log("res", res);
      
            if (res.status === 200) {
              navigate('/');
            } 
      
          })
          .catch((err) => {
            console.error('Error:', err);
      
            if (err.response && err.response.status === 400) {
              setError(true);
              setErrorMessage('Email already exists.')
            } else {
              console.error('Unexpected error:', err);
            }
          });
      };
      const dynamicColor = error ? `${theme.palette.error.main}` : `${theme.palette.secondary.main}`;

      // Example usage in a style or className

      
    const handleChange=(e)=>{
        setSingup({...signup,[e.target.name]:e.target.value})
        console.log("inside change",signup);
    }
    console.log("outside change",signup);
    const navigate = useNavigate();

    // navigate('/')

    return (
        <>
            <Grid>
                <Paper
                    elevation={12}
                    sx={{
                        height: "600px",
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
                            Sign Up
                        </Typography>
                    </Grid>
                    <Grid align="center" sx={{ padding: "20px" }}>
                     <form onSubmit={handleSubmit}>
                        <Grid sx={{ marginBottom: "20px" }}>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                placeholder="Email"
                                fullWidth
                                name="email"
                                onChange={handleChange}
                                value={signup.email}
                                required
                                type="email"
                                error={error}
                                InputProps={{
                                    sx: {
                                        fontSize: "18px", // Change font size
                                        color: dynamicColor, // Change text color
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
                                        fontSize: "18px",
                                        color: `${theme.palette.secondary.main}`, // Change label color
                                        "&.Mui-focused": {
                                            color: theme.palette.secondary.main, // Change label color on focus
                                        },
                                    },
                                }}
                            />
                            <Typography variant="subtitle1" sx={{color:`${theme.palette.error.main}`,textAlign:'start'}}>{errormessage}</Typography>
                        </Grid>
                        <Grid sx={{ marginBottom: "20px" }}>
                            <TextField
                                id="outlined-username-input"
                                label="Username"
                                placeholder="Username"
                                fullWidth
                                name="userName"
                                onChange={handleChange}
                                value={signup.userName}
                                required
                                InputProps={{
                                    sx: {
                                        fontSize: "18px", // Change font size
                                        color: `${theme.palette.secondary.main}`, // Change text color
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
                                        fontSize: "18px",
                                        color: `${theme.palette.secondary.main}`, // Change label color
                                        "&.Mui-focused": {
                                            color: theme.palette.secondary.main, // Change label color on focus
                                        },
                                    },
                                }}
                            />
                        </Grid>

                        <Grid sx={{ marginBottom: "20px" }}>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                fullWidth
                                name="password"
                                onChange={handleChange}
                                value={signup.password}
                                required
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
                                        color: `${theme.palette.secondary.main}`, // Change text color
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
                                        fontSize: "18px",
                                        color: `${theme.palette.secondary.main}`, // Change label color
                                        "&.Mui-focused": {
                                            color: theme.palette.secondary.main, // Change label color on focus
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid>
                            <Button
                                disableRipple={true}
                                type="submit"
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
                                Sign Up
                            </Button>
                        </Grid>
                     </form>
                    </Grid>
                    <Link to="/">
                        <Button
                            disableRipple={true}
                            sx={{
                                textTransform: "none",
                                color: `${theme.palette.primary.contrastText}`,
                                "&:hover": {
                                    color: `${theme.palette.secondary.main}`,
                                },
                            }}
                        >
                            Already a User?
                        </Button>
                    </Link>
                </Paper>
            </Grid>
        </>
    );
};

export default SignUp;
