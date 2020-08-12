import React,{Component} from 'react';
import './style.css';
import Feed from './components/feed'
class App extends Component 
{
    constructor(props){
    super(props);
      this.state={
        
      email:'teste@teste.com',
      senha:'12345',
     sexo:''

      
    }
    this.troca_email=this.troca_email.bind(this);
    this.troca_sexo=this.troca_sexo.bind(this);
  }
    troca_email(e){
      let valor_digitado=e.target.value;
      this.setState({email:valor_digitado});
    }
    troca_sexo(e){
      let valor_digitado=e.target.value;
      this.setState({sexo:valor_digitado});
    }
    

    render()
    {
      return(
        <div>
          <nav>
          <h1>Login</h1>
      <h3>Email:<input type="email" name="email"value={this.state.email} onChange={this.troca_email}/></h3>
      <h3>Senha:
      <input type="password" name="senha" value={this.state.senha} 
      onChange={(e)=>this.setState({senha:e.target.value})}/></h3>
      <h3>Sexo:<br/><select name="sexo" value={this.state.sexo}onChange={this.troca_sexo}>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        </select></h3>
      <div><h3>{this.state.email}</h3></div>
      <div><h3>{this.state.sexo}</h3></div>
      </nav>
      </div>

    );
  }
}

export default App;
