import React from 'react';
import Chat from '../Chat/Chat';
import './Chats.css';
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Messi"
        message="YO What up!"
        timestamp="40 seconds ago"
        profilePic="https://cdnimg.vietnamplus.vn/t1200/Uploaded/mzdic/2020_08_26/lionel-messi-2608.jpg"
      />
      <Chat
        name="Vân Sơn"
        message="Whats up!"
        timestamp="55 minutes ago"
        profilePic="https://vnn-imgs-f.vgcloud.vn/2018/09/05/18/danh-hai-van-son-phan-phao-to-nguoc-khanh-loan-5.jpg"
      />
      <Chat
        name="Bảo Liêm"
        message="Ola"
        timestamp="3 days ago"
        profilePic="https://image.thanhnien.vn/768/uploaded/congthang/2015_12_23/baoliem01_wtyr.jpg"
      />
      <Chat
        name="Chung Gia Hân"
        message="Oops there is he is... !"
        timestamp="4 weeks ago"
        profilePic="https://avatar-nct.nixcdn.com/singer/avatar/2016/01/25/4/1/1/7/1453718110178_600.jpg"
      />
      <Chat
        name="Miêu Kiều Vỹ"
        message="YO What up!"
        timestamp="1 months ago"
        profilePic="https://media.travelmag.vn/files/thienhuong/2020/07/11/maxresdefault-1042.jpg"
      />
    </div>
  );
}

export default Chats;
