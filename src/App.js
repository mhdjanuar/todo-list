import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  ListItemSecondaryAction,
  Fade,
  IconButton,
  Select,
  MenuItem,
  Typography
} from '@material-ui/core';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import ClearIcon from '@material-ui/icons/Clear';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddBoxIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updatedTodo, deleteTodo } from './redux/action';
import { makeid } from './utils/index';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10vh',
    [theme.breakpoints.down('xs')]: {
      padding: '8px',
    }
  },
  container: {
    textAlign: 'center',
    padding: '8px',
    border: '1px solid #ff6f00',
    borderRadius: '10px',
    // [theme.breakpoints.down('xs')]: {
    //   padding: '16px',
    // }
  },
  list: {
    width: '500px',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  listItem: {
    backgroundColor: '#ff6f00',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  button: {
   '&:hover': {
    backgroundColor: '#ffa040',
   } 
  },
  selectColor: {
    marginLeft: '30px',
  },
  title: {
    fontWeight: 'bold',
    padding: '16px',
    color: '#ff6f00'
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ff6f00',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff6f00',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ff6f00',
      },
      '&:hover fieldset': {
        borderColor: '#ff6f00',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff6f00',
      },
    },
  },
 })(TextField);

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const todo = useSelector(state => state.todos);

  const [textTodo, setTextTodo] = useState('');
  const [fontColor, setFontColor] = useState('#FFF');
  const [hover, setHover] = useState('');

  const onKeyPress = (e) => {
    if(e.keyCode === 13){
      if (textTodo !== '') {
        const data = {
          _id: makeid(5),
          todo: textTodo,
          status: false,
        }
  
        dispatch(createTodo(data));
        setTextTodo('')
      }
   }
  }

  const onSend = () => {
    if (textTodo !== '') {
      const data = {
        _id: makeid(5),
        todo: textTodo,
        status: false,
      }

      dispatch(createTodo(data));
      setTextTodo('')
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant={'h5'} className={classes.title}>What's your plan today?</Typography>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <CssTextField 
              value={textTodo} 
              onKeyDown={(e) => onKeyPress(e)} 
              onChange={(e) => setTextTodo(e.target.value)}
              id="outlined-basic" 
              label="New Todo" 
              variant="outlined"
              size={'small'}
              required={true}
              color={'secondary'}
            />
            <IconButton onClick={() => onSend()}>
              <AddBoxIcon style={{fontSize: '25px', color: '#ff6f00'}} />
            </IconButton>
          </div>

          <Select
            style={{marginLeft: '30px'}}
            label="Age"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={'#FFF'}
            value={fontColor}
            onChange={(val) => setFontColor(val.target.value)}
          >
            <MenuItem value={'#FFF'}>White</MenuItem>
            <MenuItem value={'red'}>Red</MenuItem>
            <MenuItem value={'green'}>Green</MenuItem>
            <MenuItem value={'blue'}>Blue</MenuItem>
          </Select>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <List className={classes.list}>
            {todo.map((item, index) => (
              <Fade key={index} in={true} timeout={500}>
                <ListItem 
                  classes={{root: classes.listItem, button: classes.button}}
                  style={{color: fontColor}}
                  onMouseOver={() => setHover(item._id)} 
                  onMouseOut={() => setHover('')}
                  onClick={() => dispatch(updatedTodo(todo, item))}
                  button>
                  <ListItemIcon>
                    {item.status ? 
                      <CheckBoxIcon style={{color: fontColor}}/> : 
                      <CheckBoxOutlineBlank style={{color: fontColor}} />}
                  </ListItemIcon>
                  <ListItemText primary={
                    <Typography type="body2" 
                     style={{ color: fontColor, textDecoration: item.status ? 'line-through' : 'none' }}>
                     {item.todo}
                    </Typography>
                  } />
                  {item._id === hover && 
                    <ListItemSecondaryAction onClick={() => dispatch(deleteTodo(todo, item))}>
                      <IconButton>
                        <ClearIcon style={{fontSize: '15px'}} />
                      </IconButton>
                    </ListItemSecondaryAction>}
                </ListItem>
              </Fade>
            ))}
          </List>
        </div>
    </div>
    </div>
  );
}

export default App;
