import React, { useState } from 'react';
import './SignUp.css'

const SuccessJoin = () => {

  return (
    <div className="result">
      <h1>회원가입이 완료되었습니다!</h1>
    </div>
  );
}

const SignUp = () => {
  const [member, setMember] = useState({
    name: '',
    id: '',
    password: '',
    email: '',
    nickName: '',
    birthDate: '',
    phone: '',
    job: '',
    techStack: ''
  });

  const [submit, setSubmit] = useState(false);

  const onChangeName = (e) => setMember({...member, name: e.target.value});
  const onChangeId = (e) => setMember({...member, id: e.target.value});
  const onChangePassword = (e) => setMember({...member, password: e.target.value});
  const onChangeEmail = (e) => setMember({...member, email: e.target.value});
  const onChangeNickname = (e) => setMember({...member, nickName:e.target.value});
  const onChangeBirthDate = (e) => setMember({...member, birthDate:e.target.value});
  const onChangePhone = (e) => setMember({...member, phone: e.target.value});
  const onChangeJob = (e) => setMember({...member, job: e.target.value});
  const onChangeTechStack = (e) => setMember({...member, techStack: e.target.value});
  const onClickSubmit = () => setSubmit(true);
  return(
    <div className='body'>
      <h1>🐾 회원가입 👩‍💻</h1>
      <div className="container">
        <input type="text" placeholder='이름' value={member.name} onChange={onChangeName} /><br />
        <input type="text" placeholder='아이디' value={member.id} onChange={onChangeId} /><br />
        <input type="password" placeholder='비밀번호' value={member.password} onChange={onChangePassword} /><br />
        <input type="text" placeholder='이메일' value={member.email} onChange={onChangeEmail} /><br />
        <input type="text" placeholder='닉네임' value={member.nickName} onChange={onChangeNickname} /><br />
        <input type="text" placeholder='생년월일' value={member.birthDate} onChange={onChangeBirthDate} /><br />
        <input type="text" placeholder='핸드폰' value={member.phone} onChange={onChangePhone} /><br />
        <input type="text" placeholder='직업' value={member.job} onChange={onChangeJob} /><br />
        <label>개발스택
          <select value={member.techStack} onChange={onChangeTechStack}>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="React">React</option>
          </select>
        </label><br />
        <button onClick={onClickSubmit}>가입하기!</button>
        {submit && <SuccessJoin /> }
      </div>
    </div>
  );
}

export default SignUp;