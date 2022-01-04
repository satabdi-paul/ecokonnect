import styled from "styled-components";
import {connect} from "react-redux";

const Main = (props) => {
  return <Container>
    <ArtCard>
       <UserInfo>
         <CardBackground />
         <a>
           <Photo />
           <Link>Welcome,{props.user ? props.user.displayName : "there"}!</Link>
         </a>
       </UserInfo>
       <Widget>
         <a>
           <div>
             <span>Ecotizens</span>
             <span>Grow your network</span>
           </div>
           <img src="/images/widget-icon.svg" alt="" />
         </a>
       </Widget>
       <Item>
         <span>
           <img src="/images/item-icon.svg" alt="" />
           Saved
         </span>
       </Item>
     </ArtCard>
     <ArtCard>
       <Widget><span><a>Your feed</a></span></Widget>
       <Widget>
       <a>
           <div>
             <span>
             <Search>
          <div>
            <input type="text" placeholder="What's happening?" />
          </div>
          <SearchIcon>
            <img src="/images/user.svg" alt="" />
          </SearchIcon>
          <div>
            <input type="text" placeholder="Optional: Enter Image URL" />
          </div>
      </Search>
      <button>Post</button>
             </span>
           </div>
           </a>
       </Widget>
     </ArtCard>
  </Container>;
};

const Container = styled.div`
  grid-area: main;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 150px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/user.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      margin-left:50px;
      border: none;
      box-shadow: none;
      background-color: #fff;
      color: #fff;
      width: 218px;
      padding: 0 8px 0 8px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  button{
    padding:5px 14px 5px 14px;
    margin-left: 580px;
    background-color: #29ab87;
  }
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};


export default connect(mapStateToProps)(Main);
