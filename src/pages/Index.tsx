import { DataTable } from "@/components/catalog/DataTable";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container py-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Goalies</h1>
              <p className="text-sm text-muted-foreground">
                Manage and explore your goalie statistics data
              </p>
            </div>

            <Tabs defaultValue="columns" className="space-y-4">
              <TabsList>
                <TabsTrigger value="columns">Columns</TabsTrigger>
                <TabsTrigger value="relationships">Relationships</TabsTrigger>
                <TabsTrigger value="queries">Queries</TabsTrigger>
                <TabsTrigger value="categorical">Categorical</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="columns" className="space-y-4">
                <div className="flex items-center gap-2">
                  <button className="text-sm px-3 py-1 rounded-md border hover:bg-accent transition-colors">
                    Enable Selected
                  </button>
                  <button className="text-sm px-3 py-1 rounded-md border hover:bg-accent transition-colors">
                    Disable Selected
                  </button>
                  <button className="text-sm px-3 py-1 rounded-md border hover:bg-accent transition-colors">
                    Regenerate Selected (0)
                  </button>
                </div>
                <DataTable />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;