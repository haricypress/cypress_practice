class rediff {

    rediff_reg_url() {
        cy.visit('https://register.rediff.com/register/register.php')
    }

    prefix(){
    cy.xpath('//input[starts-with(@name,"name")]')
    }


}
const xpathObj_rediff = new rediff()
export default xpathObj_rediff;