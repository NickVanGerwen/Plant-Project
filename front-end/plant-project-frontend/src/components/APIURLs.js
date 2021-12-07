var BaseUrl = "https://localhost:44301/";//iss
// var BaseUrl = "http://localhost:5000/"//docker

export const Variables = {
    BaseUrl: BaseUrl,
    GetGroupsByUserUrl: BaseUrl + "Group/UserGroups?userid=1",
    GetGroupByGroupIdUrl: BaseUrl + "Group/GroupDetails?groupid="
};