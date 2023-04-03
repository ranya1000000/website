/*
<h3> Sign UP</h3>
    
    <label>
    Name:
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>
    Surname:
    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
    </label>

    <label>Email:</label>
    <input
    type="email"
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
    <label>Password:</label>
    <input
    type="password"
    onChange={(e)=>setPassword(e.target.value)}
    value={password}
    />
    <label>
    Date of Birth:
    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
    </label>
    <label>
    Adress:
    <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
    </label>
    <label>
    Phone Number:
    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </label>


    const handleChange = (e) => {
    this.setInputs({value: e.target.value});
  }

//signup.js
  <div>
      <form className="form"  onSubmit={handleSubmit}>
        <Box
          marginLeft="60%"
          marginRight="auto"
          marginTop="70px"
          width={300}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
      
          <Typography  variant="h5" > Create your account </Typography>

          
              
            <TextField name="name" onChange={handleChange}  value={inputs.name} variant="outlined" placeholder="Name" margin="normal"/>
            <TextField name="adress" onChange={handleChange} value={inputs.adress}variant="outlined" placeholder="Adress" margin="normal"/>
            <TextField name="phoneNumber" onChange={handleChange} value={inputs.phoneNumber}variant="outlined" placeholder="PhoneNumber" margin="normal"/>
            <TextField name="email" onChange={handleChange} type={"email"} value={inputs.email}variant="outlined" placeholder="Email" margin="normal"/>
            <TextField name="password" onChange={handleChange} type={"password"} value={inputs.password}variant="outlined" placeholder="Password" margin="normal"/>
                  <Button variant="contained" type="submit">
                    Sign up
                  </Button>
          </Box>
  
        </form>
        </div>

*/

/*{


<div class="">
    
    
      
      <a class="" href="#!" ><i class="fab fa-facebook-f"></i></a>

      
      <a class="" href="#!" ><i class="fab fa-twitter"></i></a>

      
      <a class="" href="#!" ><i class="fab fa-google"></i></a>

      
      <a class="" href="#!" ><i class="fab fa-instagram"></i></a>

  
      <a class="" href="#!" ><i class="fab fa-linkedin"></i></a>
      
      <a class="" href="#!" ><i class="fab fa-github"></i></a>
    
    
  </div>






}*/ 

/*
//css

.App {
  font-family: sans-serif;
  text-align: center;
}

// SOCIAL STUFF 
.social-container {
  background: #eee;
  padding: 25px 50px;
}
a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}

a.social:hover {
  transform: translateY(-2px);
}

a.youtube {
  color: #eb3223;
}

a.facebook {
  color: #4968ad;
}

a.twitter {
  color: #49a1eb;
}

a.instagram {
  color: black;
} */


//login
/*<div>
      <form  onSubmit={handleSubmit}>
        <Box
          marginLeft="60%"
          marginRight="auto"
          marginTop="70px"
          width={400}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          
        >
          <Typography  variant="h3"> Welcome Back </Typography>
      
            <TextField name="email" onChange={handleChange} type={"email"} value={inputs.email}variant="outlined" placeholder="Email" margin="normal"/>
            <TextField name="password" onChange={handleChange} type={"password"} value={inputs.password}variant="outlined" placeholder="Password" margin="normal"/>
                  <Button variant="contained" type="submit">
                      Login
                  </Button> 
          </Box>
  
        </form>
    </div> */


    // header bootstrop

    
      <div class="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
      <div class="container">
          <Link to="#" class="navbar-brand"> Import / Export </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainmenu">
              <ul class="navbar-nav ms-auto">
                  <NavItem>
                  <Link to="/#" class="nav-link">Get Started</Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/#" class="nav-link">Features</Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/#" class="nav-link"> Devenir Fournisseur </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/#" class="nav-link"> Devenir Partenaire </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/#" class="nav-link"> Contact </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="./index-ar.html" class="nav-link">عربي</Link>
                  </NavItem>
              </ul>
          </div>
      </div>
  </div>

    
            {/*
                      <div>
              <AppBar position="sticky">
                <Toolbar>
                    <Typography > IMPORT / EXPORT </Typography>
                          <Box sx={{marginLeft:"auto"}}>
                            <Tabs 
                                indicatorColor="secondary"
                                onChange={(e, val) => setValue(val)}
                                value={value}
                                textColor="inherit"
                                >
                                <Tab to="/#" LinkComponent={Link} label="Home"/>
                                <Tab to="/login" LinkComponent={Link} label="Login"/>
                                <Tab to="/signup" LinkComponent={Link} label="Signup"/>
                            </Tabs> 
                          </Box>
                </Toolbar>
              </AppBar>
          </div>
          */}

          <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>

      



        //sidebar

        /*
        <Box position="absolute" bottom="2rem">
        <Divider />
        <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
          <Box
            component="img"
            alt="profile"
            src={profileImage}
            height="40px"
            width="40px"
            borderRadius="50%"
            sx={{ objectFit: "cover" }}
          />
          <Box textAlign="left">
            <Typography
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{ color: theme.palette.secondary[100] }}
            >
              {user.name}
            </Typography>
            <Typography
              fontSize="0.8rem"
              sx={{ color: theme.palette.secondary[200] }}
            >
              {user.occupation}
            </Typography>
          </Box>
          <SettingsOutlined
            sx={{
              color: theme.palette.secondary[300],
              fontSize: "25px ",
            }}
          />
        </FlexBetween>
      </Box>
        
        */