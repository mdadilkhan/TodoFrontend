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
import {Link} from 'react-router-dom'

const Login = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
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
            <Grid sx={{marginTop:'10px'}}>
              <TextField
                id="outlined-text-input"
                label="Email"
                placeholder="Email"
                fullWidth
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
                    fontSize:'18px',
                    color: `${theme.palette.secondary.main}`, // Change label color
                    "&.Mui-focused": {
                      color: theme.palette.secondary.main, // Change label color on focus
                    },
                  },
                }}
              />
            </Grid>

            <Grid sx={{marginTop:'10px'}}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                fullWidth
                sx={{ marginTop: "10px" }}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                      {/* Password visibility toggle button */}
                      <Visibility
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{
                          cursor: "pointer",
                          color: theme.palette.secondary.main,
                        }}
                      />
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
                    fontSize:'18px',
                    color: `${theme.palette.secondary.main}`, // Change label color
                    "&.Mui-focused": {
                      color: theme.palette.secondary.main, // Change label color on focus
                    },
                  },
                }}
              />
            </Grid>
            <Grid sx={{marginTop:'10px'}}>
              <Button
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
