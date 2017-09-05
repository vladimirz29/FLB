using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FLBuilder
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            webBrowser1.Navigate(new Uri("file://"+Application.StartupPath+"/BasePage/base.html"));
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string additional = " data-position-x=\"0\" data-position-y=\"0\" class=\"flb\" data-position-parent=\"noparent\" data-object-float-w=\"2\" data-object-float-h=\"1\"";
            webBrowser1.Document.GetElementById("working-area").InnerHtml += Environment.NewLine+"<strong "+additional+">"+textBox1.Text+"</strong>";
            richTextBox1.Text = webBrowser1.Document.GetElementsByTagName("body")[0].InnerHtml;
        }
    }
}
