using Microsoft.EntityFrameworkCore.Migrations;

namespace DBContext.Migrations
{
    public partial class AddPlantsToGroup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GroupId",
                table: "Plants",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Plants_GroupId",
                table: "Plants",
                column: "GroupId");

            migrationBuilder.AddForeignKey(
                name: "FK_Plants_Groups_GroupId",
                table: "Plants",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plants_Groups_GroupId",
                table: "Plants");

            migrationBuilder.DropIndex(
                name: "IX_Plants_GroupId",
                table: "Plants");

            migrationBuilder.DropColumn(
                name: "GroupId",
                table: "Plants");
        }
    }
}
