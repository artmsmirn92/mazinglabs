function open_url(url)
{
    window.open(url);
}

function opendoc_trirdparty()
{
    open_url("third-party-services.html");
}

function opendoc_policy()
{
    open_url("policy.html");
}

function write_company_name()
{
    document.write("Mazing Labs");
}

function write_current_year()
{
    document.write(new Date().getFullYear());
}

function get_link_thirdparty(title)
{
    document.write("<a href=\"javascript:opendoc_trirdparty();\">" + title + "</a>");
}

function get_link_policy(title)
{
    document.write("<a href=\"javascript:opendoc_policy();\">" + title + "</a>");
}

function get_link_support_mail()
{
    let mail = "mgc0mob@gmail.com";
    document.write("<a href=\"mailto: " + mail + "\">"+ mail + "</a>");
}

function get_link_full(url, title)
{
    document.write("<a href=\"" + url + "\">" + title + "</a>");
}

function get_link(url)
{
    get_link_full(url, url);
}