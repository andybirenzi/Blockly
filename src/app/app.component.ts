import { Component, OnInit } from '@angular/core';
declare var Blockly: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public workspace: any;
    public check=true;
    public toolbox: string =
        `<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
    <category name="Automating Tasks" colour="#5C81A6" >
    <block type="controls_if"></block>
    <block type="logic_compare">
        <field name="OP">EQ</field>
    </block>
    <block type="logic_operation">
        <field name="OP">AND</field>
    </block>
    <block type="logic_negate"></block>
    <block type="logic_boolean">
        <field name="BOOL">TRUE</field>
    </block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
    </category>
    <category name="Amazon" colour="#5CA65C">
    <block type="controls_repeat_ext">
    <value name="TIMES">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="controls_whileUntil">
    <field name="MODE">WHILE</field>
</block>
<block type="controls_for">
    <field name="VAR" id="TWD31WlVifV63ZP6vMC~" variabletype="">i</field>
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="BY">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
<block type="controls_forEach">
    <field name="VAR" id="1E#/ieTE6ryfCX*05^S" variabletype="">j</field>
</block>
<block type="controls_flow_statements">
    <field name="FLOW">BREAK</field>
</block>
    </category>
    <category name="Basics" colour="#5C68A6">
    <block type="bean"></block>
    </category>
    <category name="Chat" colour="#5CA68D">
       
    </category>
    <category name="Clusters" colour="#745CA6">
       
    </category>
    <category name="Content Repositories" colour="#A6745C">
    <block type="condition"></block>
    </category>
    <category name="Endpoint Communications" colour="#A6745C">
    
    </category>
    <category name="ESB" colour="#A6745C">

    </category>
    <category name="Feeds" colour="#A6745C">

    </category>
    <category name="File I/O and Transfer" colour="#A6745C">
    <block type="FTPProducer"></block>
    <block type="FTPConsumer"></block>
    </category>
    <category name="Google" colour="#A6745C">

    </category>
    <category name="HTTP" colour="#A6745C">

    </category>
    <category name="Java Message Service" colour="#A6745C">

    </category>
    <category name="LDAP" colour="#A6745C">

    </category>
    <category name="Mail" colour="#A6745C">

    </category>
    <category name="Maintenance and Monitoring" colour="#A6745C">

    </category>
    <category name="Messaging" colour="#A6745C">

    </category>
    <category name="Networking" colour="#A6745C">

    </category>
    <category name="OSGi" colour="#A6745C">
    
    </category>
    <category name="Persistence" colour="#A6745C">
        
    </category>
    <category name="Platform Support" colour="#A6745C">
    
    </category>
    <category name="Remote Services" colour="#A6745C">
    
    </category>
    <category name="Search Engines" colour="#A6745C">
    
    </category>
    <category name="Social Media" colour="#A6745C">
    
    </category>
    <category name="Security" colour="#A6745C">
    
    </category>
    <category name="Special support" colour="#A6745C">
    
    </category>
    <category name="Spring" colour="#A6745C">
    
    </category>
    <category name="Templates" colour="#A6745C">
    
    </category>
    <category name="Testing" colour="#A6745C">
    
    </category>
    <category name="Web Services" colour="#A6745C">
    
    </category>
    <category name="XML" colour="#A6745C">
    
    </category>
   
</xml>`;


    ngOnInit() {

        this.createBlocks();


    }

    createBlocks() {

        this.workspace = Blockly.inject('blocklyDiv',
            { toolbox: this.toolbox });

        return this.workspace;
    }
    saveWorkspace() {
        var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
        console.log("Saved file:");
        console.log(xmlText);
        localStorage.setItem("andy.xml", xmlText);
    }

    loadWorkspace() {
        var xmlText = localStorage.getItem("andy.xml");
        if (xmlText) {
            Blockly.mainWorkspace.clear();
            var xmlDom = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xmlDom, Blockly.mainWorkspace);
        }
    }

    toggle() {
        console.log("hiiiiiiii")
        if (this.check == true) {
            // document.getElementById('leftnav').classList.remove('col-md-2');
           
            document.getElementById('leftnav').style.display='none';
            document.getElementById('leftnav').style.transition='transition: width 2s, height 4s';
            document.getElementById('center').classList.remove('col-md-10');
            document.getElementById('center').classList.add('col-md-12');
            document.getElementById('blocklyDiv').style.width="100%";
            document.getElementById('blocklyDiv').style.height="100%";
            
            
        }
        else {
            document.getElementById('leftnav').style.display='block';
            document.getElementById('center').classList.add('col-md-10');
            document.getElementById('center').classList.remove('col-md-12');
        }
        this.check = !this.check;

    }

    generateJavaCode(event) {

        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        console.log("generated code: " + code);
    }



}
